export default async function handler(req, res) {
    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
  
    const options = {
      redirect_uri: process.env.GOOGLE_REDIRECT_URI,
      client_id: process.env.GOOGLE_CLIENT_ID,
      access_type: 'offline',
      response_type: 'code',
      prompt: 'consent',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ].join(' ')
    };
  
    const qs = new URLSearchParams(options);
  
    res.redirect(`${rootUrl}?${qs.toString()}`);
  }
  