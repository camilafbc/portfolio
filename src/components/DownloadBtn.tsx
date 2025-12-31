"use client";

import { Download, Loader2Icon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export const DownloadBtn = () => {
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleDownloadBtn = async () => {
    setDisabled(true);

    try {
      const response = await fetch("/curriculo.pdf");
      const blob = await response.blob();
      const fileURL = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = fileURL;
      link.download = "Curriculo_Camila_F_B_Coelho.pdf";
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(fileURL);
    } catch (error) {
      console.error("Erro: " + error);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <Button
      variant={"outline"}
      disabled={disabled}
      onClick={handleDownloadBtn}
      className="bg-transparent border-primary/50 hover:bg-primary/10 hover:border-primary mx-auto transition-colors"
    >
      {disabled ? (
        <Loader2Icon className="mr-2 animate-spin animate-infinite" />
      ) : (
        <Download className="mr-2" />
      )}

      {disabled ? "Baixando" : "Baixar Currículo"}
    </Button>
  );
};
