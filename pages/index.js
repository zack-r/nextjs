import Link from "next/link";
import Header from "../components/header";
import Example from "../components/example/Example"
import PropsEx from "../components/props/PropsEx"

function Index() {
  return (
    <main>
      <Header />
      <Example />
      <PropsEx name="Zack"/>
      <section>
        <Link href="/about">
          <a>Go to About Me</a>
        </Link>
      </section>
    </main>
  );
}

export default Index;
