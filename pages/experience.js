import Header from "../components/header";
import ContentRow from "../components/contentrow";
import experiences from "../data/experience";

function Experience() {
  let rows = []
  for (var i = 0; i < experiences.length; i++) {
    rows.push(<ContentRow title={experiences[i].title}
                          src={experiences[i].src}
                          description={experiences[i].description}/>);
  }
  return (
    <div>
      <Header />
      <div class="container d-flex flex-column align-items-center">
        {rows}
      </div>
    </div>
  );
}

export default Experience;
