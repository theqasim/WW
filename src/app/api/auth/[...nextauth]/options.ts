import type { NextAuthOptions, Profile } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

interface ExtendedProfile extends Profile {
  guilds?: { id: string }[];
}

export const options: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
      authorization: process.env.DISCORD_GENERATED_URL as string,
    }),
  ],
  callbacks: {
    signIn: async ({ account }) => {
      console.log("account", account?.access_token);
      if (account && account.access_token) {
        const response = await fetch(
          "https://discord.com/api/users/@me/guilds",
          {
            headers: {
              Authorization: `Bearer ${account.access_token}`,
            },
          },
        );
        if (!response.ok) {
          console.error("Failed to fetch guilds");
          return false;
        }
        const guilds = await response.json();
        //console.log("guilds", guilds)
        const targetGuildId = "1153994810789740598";
        if (
          guilds.some((guild: { id: string }) => guild.id === targetGuildId)
        ) {
          console.log("in guild");
          return true;
        }
      }
      console.log("not in guild or no access token");
      return false;
    },
  },
  // pages: {
  //     signIn: "/signin",
  // },
};
