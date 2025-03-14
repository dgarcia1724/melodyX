import { URLSearchParams } from "url";

export interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

export interface SpotifyArtist {
  id: string;
  name: string;
}

export interface SpotifyAlbum {
  id: string;
  name: string;
  images: SpotifyImage[];
  artists: SpotifyArtist[];
}

type SpotifyNewReleasesResponse = {
  albums: {
    items: SpotifyAlbum[];
  };
};

interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface SpotifyErrorResponse {
  error: {
    status: number;
    message: string;
  };
}

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const TOP_TRACKS_ENDPOINT = "https://api.spotify.com/v1/browse/new-releases";

const getAccessToken = async (): Promise<SpotifyTokenResponse> => {
  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }).toString(),
    });

    if (!response.ok) {
      const error = (await response.json()) as SpotifyErrorResponse;
      throw new Error(`Failed to get access token: ${error.error.message}`);
    }

    const data = await response.json();
    if (!data.access_token) {
      throw new Error("Invalid token response: missing access_token");
    }

    return data;
  } catch (error) {
    console.error("Error getting access token:", error);
    throw error;
  }
};

export const getTopTracks = async (): Promise<SpotifyAlbum[]> => {
  try {
    const { access_token } = await getAccessToken();

    const response = await fetch(TOP_TRACKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!response.ok) {
      const error = (await response.json()) as SpotifyErrorResponse;
      throw new Error(`Failed to get top tracks: ${error.error.message}`);
    }

    const data = (await response.json()) as SpotifyNewReleasesResponse;
    if (!data.albums?.items) {
      console.error("Invalid response data:", data);
      throw new Error("Invalid response format: missing albums.items");
    }

    return data.albums.items;
  } catch (error) {
    console.error("Error getting top tracks:", error);
    return []; // Return empty array instead of throwing to prevent page crash
  }
};
