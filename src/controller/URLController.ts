import { Request, Response } from "express";
import shortId from "shortid";
import { config } from "./../config/Constants";

export class URLController {
  public async shorten(req: Request, response: Response): Promise<void> {
    // Ver se a URL já existe
    // Criar o Hash para a URL
    const { originURL } = req.body;

    const hash = shortId.generate();
    const shortURL = `${config.API_URL}/${hash}`;
    // Salvar a URL no Banco de Dados
    // Retornar a URL que foi salva
    response.json({ originURL, hash, shortURL });
  }

  public async redirect(req: Request, response: Response): Promise<void> {
    // Pegar has da URL
    const { hash } = req.params;
    // Encontrar a URL original pelo hash
    const url = {
      originURL: "https://github.com/Wanderson-A-Timoteo",
      hash: "",
      shortURL: "",
    };
    // Redirecionar para a URL original a partir do que encontramos no Banco de Dados
    response.redirect(url.originalURL);
  }
}
