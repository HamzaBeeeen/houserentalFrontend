export interface SignUpDTO {
    username: string;
    email: string;
    password: string;
}
  
export interface User {
    id: number;
    username: string;
    email: string;
    // add other properties if needed
}