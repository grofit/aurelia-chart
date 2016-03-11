export class NumericConverter {

  convertAllDataToNumeric(model) {
    var sanitisedData = null;
    if(model.datasets) // Array checks
    {
      sanitisedData = {};
      sanitisedData.datasets = [];
      model.datasets.forEach(function(dataset, datasetIndex){
        sanitisedData[datasetIndex] = { data: [] };
        for(var i=0;i<dataset.data.length;i++){
          sanitisedData[datasetIndex].data[i] = parseFloat(dataset.data[i])
        }
      });
    }
    else // Segment checks
    {
      sanitisedData = [];
      model.forEach((datapoint, datapointIndex) => {
        sanitisedData[datapointIndex] = { value: parseInt(datapoint.value) };
      });
    }
    return model;
  };

}
