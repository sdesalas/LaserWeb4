/**
 * Wizard Step module.
 * @module
 */

// React
import React from 'react'

/**
 * Wizard Step component.
 *
 * @extends module:react~React~Component
 * @param {Object} props Component properties.
 */
class WizardStep extends React.Component {
    /**
     * Render the component.
     * @return {String}
     */
    render() {
        return (
            <div className="wizardStep">
                Wizard Step1
            </div>
        )
    }
}

// Exports
export default WizardStep