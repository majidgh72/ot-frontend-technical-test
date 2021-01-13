function chartOptionModifier( data, chartType ) {
    const {
        literature,
        rna_expression,
        genetic_association,
        somatic_mutation,
        known_drug,
        animal_model,
        affected_pathway
    } = data;

    return {
        labels: ['literature', 'rna_expression', 'genetic_association', 'somatic_mutation', 'known_drug', 'animal_model', 'affected_pathway'],
        datasets: [{
            label: 'Association Score vs Data Type',
            data: [literature, rna_expression, genetic_association, somatic_mutation, known_drug, animal_model, affected_pathway],
            backgroundColor: chartType === "bar" 
                ? '#3489ca'
                : 'transparent',
            borderWidth: chartType === "bar" 
                ? null
                : '2',
            borderColor: '#3489ca',
        }]
    };
}

export default chartOptionModifier;