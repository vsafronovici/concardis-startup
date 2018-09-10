import React, { Component } from 'react';
import ExtraField from './extraField/ExtraField'
import { connect } from 'react-redux';
import { step3MetaSelector } from '../../../selectors/configurator-selector';
import { changeFieldValue } from '../../../actions/configurator-action'
import { Input, Button } from 'antd';
import { goToStep } from '../../../actions/configurator-action'
import { ConfiguratorPageStep } from '../../../utils/constants'

class ExtraOptions extends Component {

    render() {
        const { meta3MockData, changeFieldValue, goToStep } = this.props;
        const { placeHolder, recalcButton, question, totalQuote, monthly, navButton } = meta3MockData;
        return(
            <div className="eo-container">
                <div className="eo-title">
                    Select Extras
                </div>
                <div className="eo-ef-container">                    
                        {meta3MockData.extraFields.map( exField => {
                            return(
                                <div key={exField.id}> 
                                    <ExtraField exField={exField} changeFieldValue={changeFieldValue}/>
                                </div>
                            )   
                        })} 
                                       
                </div>
                <div className="eo-question">
                    {question}
                </div>
                <div className="eo-input">
                    <Input placeholder={placeHolder} />
                </div>
                <div className="eo-recalc-button">
                    <Button>
                        {recalcButton}
                    </Button>
                </div>
                <div className="eo-bottom-container">
                        <div className="eo-bottom-titles">
                            <div className="eo-bottom-totalquote">
                                {totalQuote}
                            </div>
                            <div className="eo-bottom-monhtly">
                                {monthly}
                            </div>
                        </div>
                        <div className="eo-bottom-navbutton">
                            <Button onClick={() => goToStep(ConfiguratorPageStep.STEP1)}>
                                {navButton}
                            </Button>
                        </div>                        
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    meta3MockData: step3MetaSelector(state)
})

const mapDispatchToProps = ({
    changeFieldValue,
    goToStep
})

export default connect(mapStateToProps, mapDispatchToProps)(ExtraOptions); 