function ContentArea(props){
  return (
    <main className="content-container mt-5 min-vh-100">
      <div className="container">
        <div className="row">
          {props.children}
        </div>
      </div>
    </main>
  );
}

export default ContentArea;