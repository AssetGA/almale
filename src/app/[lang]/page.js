import Main from "../components/Main";

export default async function Home({ params: { lang } }) {
  return <Main lang={lang} />;
}
