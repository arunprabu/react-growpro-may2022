// HOC will receive original comp and return a new comp 
// it can return with updated data, updated JSX

const applyStyles = (OriginalComponent) => { // receiving original comp 
  // returning a new comp

  return ((props) => {

    let cardStyle = '';
    if(props.color === 'primary'){
      cardStyle = 'text-bg-primary card mb-3';
    } else{
      cardStyle = 'text-bg-danger card mb-3';
    }

    return(
      <div className={cardStyle}>
        <div className="card-body">
          <OriginalComponent />
        </div>
      </div>
    )
  })  
}

export default applyStyles;