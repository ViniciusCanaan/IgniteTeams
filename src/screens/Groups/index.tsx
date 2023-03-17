import { Header } from "@components/Header";
import { HighLight } from "@components/Highlight";
import React from "react";

import { Container } from "./styles";

export function Groups() {
    return (
      <Container>
        <Header showBackButton/>
        <HighLight title="Turmas" subtitle="jogue com a sua turma"/>
      </Container>
    );
  }
  
  