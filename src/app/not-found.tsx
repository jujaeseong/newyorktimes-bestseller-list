import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return <h1 style={{ fontSize: "2rem", padding: "2rem" }}>404 NOT FOUND</h1>;
}
