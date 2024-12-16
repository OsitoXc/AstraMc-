function launchMinecraft() {
    // Copia la IP al portapapeles y muestra un mensaje
    navigator.clipboard.writeText("play.astramc.xyz").then(() => {
        alert("IP copiada: play.astramc.xyz\n¡Conéctate a AstraMc en Minecraft!");
    });
}
