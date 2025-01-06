// Mock API service for authentication
export interface SignUpData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  occupation: string;
  timezone: string;
  password: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  email?: string;
}

//kkkkk

class AuthService {
  private mockDelay = 1000; // Simulate network delay

  async signUp(data: SignUpData): Promise<AuthResponse> {
    await this.delay();
    // Mock signup validation
    if (!data.firstName || !data.lastName || !data.password) {
      return { success: false, message: "All fields are required" };
    }
    return { 
      success: true, 
      message: "Verification email sent",
      email: "user@example.com" // In real app, this would be the user's email
    };
  }

  async signIn(data: SignInData): Promise<AuthResponse> {
    await this.delay();
    // Mock credentials check
    if (data.email === "user@example.com" && data.password === "password") {
      return {
        success: true,
        message: "Successfully signed in",
        token: "mock-jwt-token"
      };
    }
    return { success: false, message: "Invalid credentials" };
  }

  async verifyCode(code: string): Promise<AuthResponse> {
    await this.delay();
    return code === "123456" 
      ? { success: true, message: "Email verified" }
      : { success: false, message: "Invalid verification code" };
  }

  private delay() {
    return new Promise(resolve => setTimeout(resolve, this.mockDelay));
  }
}

export const authService = new AuthService();