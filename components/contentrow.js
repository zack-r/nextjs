function ContentRow(props) {
  return (
    <div class="card col-8 d-flex mt-3">
      <div class="row">
        <div class="col-md-4">
          <img src={props.src} class="card-img"/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentRow;
