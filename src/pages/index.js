import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  router.replace("/login");
  return <>home page </>;
} 
export async function getServerSideProps({ req, res }) {
  // Check if the user is authenticated
  const isAuthenticated = req.cookies.isAuthenticated;

  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    res.setHeader("location", "/login");
    res.statusCode = 302;
    res.end();
    return { props: {} };
  }

  // If the user is authenticated, render the home page
  return { props: {} };
}
