
const AccordionComponent = (props) => {
    return (
      <div className="my-10">
        <div className="collapse collapse-plus bg-[transparent] border border-slate-600">
          <input type="radio" name="my-accordion" checked="checked" />
          <div className="collapse-title text-xl font-medium lexend">
            {props.header}
          </div>
          <div className="collapse-content">
            <p className="text-sm lexend font-thin">
             {props.text}
            </p>
          </div>
        </div>
       </div>
    );
  };
  
  export default AccordionComponent;
  