/* eslint-disable @typescript-eslint/no-unused-vars */
import fs, { readSync } from "fs";
import http from "http";
import url from "url";
import { strict } from "assert";

interface InputInterface {
    name: string;
    age: number;
    male: boolean;
}
export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Jedlik Ts Template</title>");
        res.write("</head>");
        res.write("<body><form><pre>");

        // Kezd a kódolást innen -->

        const ev = 2020;
        const name = "Norbi";
        const HasGirlfriend = true;
        const isPoor = false;
        const paradics = "Paradicsom";
        const paradics2 = "Paradicsom2";
        const vega: string[] = ["tojás", "alma"];
        const bestSportman: [string, boolean] = ["Messi", true];

        res.write("A nap tanulója: ");
        res.write("${name}");

        res.write("Az idei év: ");
        res.write("${ev}");

        res.write("Van barátnője: ");
        res.write("${HasGirlfriend}");

        res.write("Szegény?: ");
        res.write("${isPoor}");

        res.write("Kedvenc zöldség: ");
        res.write("${paradics}");

        res.write("Kedvenc gyümölcs: ");
        res.write("${paradics2}");

        res.write("Vega ételek: ");
        for (let i = 0; i < vega.length; i++) {
            res.write("${vega[i]}");
        }
        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
