import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { TournamentList } from "./tournament/TournamentList";
import { TournamentCreate } from "./tournament/TournamentCreate";
import { TournamentEdit } from "./tournament/TournamentEdit";
import { TournamentShow } from "./tournament/TournamentShow";
import { MatchList } from "./match/MatchList";
import { MatchCreate } from "./match/MatchCreate";
import { MatchEdit } from "./match/MatchEdit";
import { MatchShow } from "./match/MatchShow";
import { SignupList } from "./signup/SignupList";
import { SignupCreate } from "./signup/SignupCreate";
import { SignupEdit } from "./signup/SignupEdit";
import { SignupShow } from "./signup/SignupShow";
import { WebpageList } from "./webpage/WebpageList";
import { WebpageCreate } from "./webpage/WebpageCreate";
import { WebpageEdit } from "./webpage/WebpageEdit";
import { WebpageShow } from "./webpage/WebpageShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Tournament"
          list={TournamentList}
          edit={TournamentEdit}
          create={TournamentCreate}
          show={TournamentShow}
        />
        <Resource
          name="Match"
          list={MatchList}
          edit={MatchEdit}
          create={MatchCreate}
          show={MatchShow}
        />
        <Resource
          name="Signup"
          list={SignupList}
          edit={SignupEdit}
          create={SignupCreate}
          show={SignupShow}
        />
        <Resource
          name="Webpage"
          list={WebpageList}
          edit={WebpageEdit}
          create={WebpageCreate}
          show={WebpageShow}
        />
      </Admin>
    </div>
  );
};

export default App;
