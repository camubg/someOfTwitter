export class Tweet {
  created_at: string;
  full_text: string;
  user: {
    name: string;
    screen_name: string;
    profile_image_url_https: string;
  };
}
