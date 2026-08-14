import { DiscordSDK } from "https://esm.sh/@discord/embedded-app-sdk@2.5.0";

const CLIENT_ID = "1510641116528250990";

const status = document.getElementById("status");

const discordSdk = new DiscordSDK(CLIENT_ID);

function setStatus(text) {
    if (status) {
        status.textContent = text;
    }

    console.log("[MOON ACTIVITY]", text);
}

async function start() {
    try {
        setStatus("SDK loading...");

        console.log("Discord SDK created");
        console.log("Client ID:", CLIENT_ID);

        setStatus("Connecting to Discord...");

        await discordSdk.ready();

        setStatus("Connected to Discord ✅");

        console.log("Discord SDK READY!");
        console.log("Instance ID:", discordSdk.instanceId);

    } catch (error) {
        console.error("Moon Activity error:", error);

        setStatus(
            "Discord connection failed ❌\n" +
            (error?.message || String(error))
        );
    }
}

start();