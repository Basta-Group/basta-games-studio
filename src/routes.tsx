import { createBrowserRouter, Outlet } from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./components/homePage";
import ScrollToTop from "./components/ScrollToTop";
import IGameScreen from "./components/IGameScreen";
import GameDetails from "./components/GameDetails";

// Define your routes using `createBrowserRouter`
export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <NavBar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gamescreen",
        element: <IGameScreen />,
      },
      {
        path: "/gamescreen/:gameUrl",
        element: <IGameScreen />,
      },
      {
        path: "/game-details/:gameName",
        element: <GameDetails />,
      },
      // {
      //   path: "/games",
      //   element: <GamesPage />,
      // },
      // {
      //   path: "/games/:slug",
      //   element: <GameDetailsPage />,
      // },
      // {
      //   path: "/contact",
      //   element: <ContactPage />,
      // },
      // {
      //   path: "/about",
      //   element: <AboutPage />,
      // },
      // {
      //   path: "/detail",
      //   element: <DetailPage />,
      // },
    ],
  },
]);
