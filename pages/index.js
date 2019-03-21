import Link from "next/link";
import Header from "../components/header";
import Example from "../components/Example"
import PropsEx from "../components/PropsEx"

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
