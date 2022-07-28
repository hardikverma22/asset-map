import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tree from 'react-d3-tree';
import { useCenteredTree } from "./helpers";
import { assestsData, liabilitiesData } from './data/OrgData';
import assetImage from './images/assetImage.jpg';
const containerStyles = {
  width: "100%",
  height: "100%"
};

const treeProps = {
  zoomable: false,
  scaleExtent: 1,
  zoom: 0.7,
  hasInteractiveNodes: true,
  enableLegacyTransitions: true,
  depthFactor: 300,
  pathFunc: 'Step'
}


const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
  borderStyle
}) => (
  <g style={{ width: "100%", height: "100%" }}>
    <foreignObject {...foreignObjectProps}>
      {nodeDatum.attributes?.type == 'sub' &&
        <button type="button" className='sub btn btn-outline-success btn-block btn-light d-flex rounded-pill clearfix'>
          <h6 className='me-2'>
            {nodeDatum.name}
          </h6>

          {nodeDatum.attributes?.dollarValue && (
            <div className='flex-grow-1'>
              <div className='p-1 rounded-pill h-100 bg-info'>{nodeDatum.attributes.dollarValue}</div>
            </div>
          )}
        </button>
      }
      {nodeDatum.attributes?.type != 'sub' &&
        <button type="button" style={{ [borderStyle]: nodeDatum.attributes?.type =='main' ?  '25px' : '0px' }} className={`btn d-flex flex-column justify-content-center align-items-center align-content-center ${nodeDatum.attributes?.type =='main' ?  "btn-primary" : "btn-warning"}`}>
          <h6 className=''>
            {nodeDatum.name}
          </h6>

          {nodeDatum.attributes?.dollarValue && (
            <p className=''>{nodeDatum.attributes.dollarValue}</p>
          )}
        </button>
      }
      {/* <div style={{ border: "1px solid black", backgroundColor: "#dedede" }}>
        <h3 style={{ textAlign: "center" }}>{nodeDatum.name}</h3>
        
        {nodeDatum.children && (
          <button style={{ width: "100%" }} onClick={toggleNode}>
            {nodeDatum.__rd3t.collapsed ? "Expand" : "Collapse"}
          </button>
        )}
      </div> */}
    </foreignObject>
  </g>
);

function App() {
  const [translate, translateLeft, containerRef, containerRefLeft] = useCenteredTree();
  const nodeSize = { x: 300, y: 200 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 0, y: -25 };
  return (
    <div id="mmenu_screen" className="container-fluid main_container d-flex">
      <div className="row flex-fill">
        <div className="col-sm-6 h-100">
          <div className="row h-50 ">
            <div className="col-sm-12 inner">
              <div style={containerStyles} ref={containerRefLeft} id="top-left">
                <Tree
                  data={assestsData}
                  translate={translateLeft}
                  renderCustomNodeElement={(rd3tProps) =>
                    renderForeignObjectNode({ ...rd3tProps, foreignObjectProps, borderStyle: 'borderTopLeftRadius' })
                  }
                  zoomable={treeProps.zoomable}
                  scaleExtent={treeProps.scaleExtent}
                  zoom={treeProps.zoom}
                  hasInteractiveNodes={treeProps.hasInteractiveNodes}
                  enableLegacyTransitions={treeProps.enableLegacyTransitions}
                  pathFunc="straight"
                  depthFactor={-1 * treeProps.depthFactor}
                />
              </div>
            </div>
          </div>
          <div className="row h-50">
            <div className="col-sm-12" id="mmenu_screen--information" >
              <div style={containerStyles} ref={containerRefLeft} id="bottom-left">
                <Tree
                  data={assestsData}
                  translate={translateLeft}
                  renderCustomNodeElement={(rd3tProps) =>
                    renderForeignObjectNode({ ...rd3tProps, foreignObjectProps, borderStyle: 'borderBottomLeftRadius' })
                  }
                  zoomable={treeProps.zoomable}
                  scaleExtent={treeProps.scaleExtent}
                  zoom={treeProps.zoom}
                  hasInteractiveNodes={treeProps.hasInteractiveNodes}
                  enableLegacyTransitions={treeProps.enableLegacyTransitions}
                  depthFactor={-1 * treeProps.depthFactor}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mmenu_screen--direktaction bg-faded flex-fill">
          <div className="row h-50">
            <div className="col-sm-12" id="mmenu_screen--book">
              <div style={containerStyles} ref={containerRef}>
                <Tree
                  data={assestsData}
                  translate={translate}
                  renderCustomNodeElement={(rd3tProps) =>
                    renderForeignObjectNode({ ...rd3tProps, foreignObjectProps, borderStyle: 'borderTopRightRadius' })
                  }
                  zoomable={treeProps.zoomable}
                  scaleExtent={treeProps.scaleExtent}
                  zoom={treeProps.zoom}
                  //hasInteractiveNodes={treeProps.hasInteractiveNodes}
                  enableLegacyTransitions={treeProps.enableLegacyTransitions}
                  pathFunc={treeProps.pathFunc}
                  depthFactor={treeProps.depthFactor}
                />
              </div>
            </div>
          </div>
          <div className="row h-50">
            <div className="col-sm-12" id="mmenu_screen--information">

            <div style={containerStyles} ref={containerRef}>
                <Tree
                  data={assestsData}
                  translate={translate}
                  renderCustomNodeElement={(rd3tProps) =>
                    renderForeignObjectNode({ ...rd3tProps, foreignObjectProps, borderStyle: 'borderBottomRightRadius' })
                  }
                  zoomable={treeProps.zoomable}
                  scaleExtent={treeProps.scaleExtent}
                  zoom={treeProps.zoom}
                  //hasInteractiveNodes={treeProps.hasInteractiveNodes}
                  enableLegacyTransitions={treeProps.enableLegacyTransitions}
                  pathFunc={treeProps.pathFunc}
                  depthFactor={treeProps.depthFactor}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
