/**
 * Wizard module.
 * @module
 */

// React
import React from 'react'

//import WizardStep from './wizard-step'

function WizardStep(props) {
    console.log('WizardStep', { ...props });
    function close() {
        console.log('closing wizard');
    }

    function next() {
        console.log('next step');
    }

    return <div className='wizard-step' style={{ ...props.style }}>
                <a name='close' className='close' onClick={ props.close }>x</a>
                <h2>{props.name}</h2>
                <div>{ props.children }</div>
                <div className='wizard-footer'>
                    <label for='hidePermanently'>
                        <input id='hidePermanently' type='checkbox'/>
                        Do not show this again
                    </label>
                    <button className="btn-next btn btn-primary" onClick={next}>Next</button>
                </div>
            </div>;
}

/**
 * Wizard component.
 *
 * @extends module:react~React~Component
 * @param {Object} props Component properties.
 */
class Wizard extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        visible: true
      };
    }

    close (e) {
        console.log('Wizard.close()');
        this.setState({ visible: false });
    }

    /**
     * Render the component.
     * @return {String}
     */
    render() {

        return (
            this.state.visible ?
            <div className='wizard'>
                <WizardStep name='Welcome to Laserweb' style={{ display: 'block' }} close={ this.close.bind(this) }>
                    <div className="row" style={{ textAlign: 'center', marginTop: '40px'}}>
                      <div className="col-xs-6">
                        <a className='btn btn-default btn-lg'>
                          <p><span className="glyphicon glyphicon-folder-open" aria-hidden="true"></span></p>
                          Open Project
                        </a>
                      </div>
                      <div className="col-xs-6">
                        <a className='btn btn-default btn-lg'>
                        <p><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></p>
                        Create New
                        </a>
                      </div>
                    </div>
                </WizardStep>
                <WizardStep name='Step2'>Wizard Step 2</WizardStep>
            </div> : null
        )
    }
}

// Exports
export default Wizard
