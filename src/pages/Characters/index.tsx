import React from "react";
import { withAuthorization } from "../../firebase/withAuthorization";
import CharactersList  from "./CharactersList";
import { characters, getCharactersUrl } from '../../services/characters';

class CharactersComponent extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      characters: []
    };
  }

  public componentDidMount() {
   this.loadCharacters();
  }

  private loadCharacters = async() => { 
    const response = await characters.get(getCharactersUrl());
    this.setState({ characters: response.data.data.results })
  }

  public render() {
    const { characters }: any = this.state;

    return (
      <div>
        {!!characters && <CharactersList characters={characters} />}
      </div>
    );
  }
}

const authCondition = (authUser: any) => !!authUser;

export const Characters = withAuthorization(authCondition)(CharactersComponent);