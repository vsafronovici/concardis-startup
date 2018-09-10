import React, { Component } from 'react';
import ExtraField from './extraField/ExtraField'
import { connect } from 'react-redux';
import { step3MetaSelector } from '../../../selectors/configurator-selector';
import { changeFieldValue } from '../../../actions/configurator-action'

class ExtraOptions extends Component {

    

    render() {
        const { meta3MockData, changeFieldValue } = this.props;
        return(
            <div className="eo-container">
                <div className="eo-title">
                    Select Extras
                </div>
                <div className="eo-ef-container">                    
                        {meta3MockData.extraFields.map( exField => {
                            return(
                                <div> 
                                    <ExtraField exField={exField} key={exField.id} changeFieldValue={changeFieldValue}/>
                                </div>
                            )   
                        })}                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    meta3MockData: step3MetaSelector(state)
})

const mapDispatchToProps = dispatch => ({
    changeFieldValue: values => {
        console.log(values)
        dispatch(changeFieldValue(values))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ExtraOptions); 