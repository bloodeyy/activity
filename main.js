import { DiscordSDK } from "https://esm.sh/@discord/embedded-app-sdk@2.5.0";

const CLIENT_ID = "1510641116528250990";

const discordSdk = new DiscordSDK(CLIENT_ID);

const status = document.getElementById("status");

async function start() {
    try {
        status.textContent = "Connecting to Discord...";

        await discordSdk.ready();

        status.textContent = "Connected to Discord ✅";

        console.log("Moon Activity connected!");
        console.log("Instance ID:", discordSdk.instanceId);

    } catch (error) {
        console.error("Moon Activity error:", error);

        status.textContent = "Discord connection failed ❌";
    }
}

start();