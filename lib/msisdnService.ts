import axios from 'axios';

const MSISDN_API_URL = process.env.NEXT_PUBLIC_MSISDN_API_URL || 'http://jazzred-cms-stg.jazz.com.pk/jazz/v1/api/proxy/msisdn';

export interface MsisdnResponse {
  success: boolean;
  data?: string;
  message?: string;
}

/**
 * Fetches MSISDN from the HTTP API endpoint
 * @returns Promise with MSISDN data
 */
export async function fetchMsisdn(): Promise<MsisdnResponse> {
  try {
    const response = await axios.get(MSISDN_API_URL, {
      timeout: 10000,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.data && response.data.success && response.data.data) {
      return {
        success: true,
        data: response.data.data,
      };
    }

    return {
      success: false,
      message: response.data?.message || 'Failed to fetch MSISDN',
    };
  } catch (error: any) {
    console.error('MSISDN fetch error:', error);
    
    if (error.response) {
      return {
        success: false,
        message: `Server error: ${error.response.status}`,
      };
    } else if (error.request) {
      return {
        success: false,
        message: 'Network error: Unable to reach the server',
      };
    }
    
    return {
      success: false,
      message: error.message || 'An unexpected error occurred',
    };
  }
}
