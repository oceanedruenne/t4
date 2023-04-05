import '../jauge.css'

function Jauge({name, value}) {
  return (
    <div className="jauge">
      <h4>{name}</h4>
      <div className="progress">
        <div className="progress-value" style={{ width: value+ "%"}}> {value}%</div>
      </div>
    </div>
  );
}

export default function Jauges({comprehension, motivation, inquietude, satisfaction})
{  
  return (
    <div id="jauges">
      <Jauge name="Compréhension" value={comprehension} />
      <Jauge name="Motivation" value={motivation} />
      <Jauge name="Inquiétude" value={inquietude} />
      <Jauge name="Satisfaction" value={satisfaction} />
    </div>
  );
}