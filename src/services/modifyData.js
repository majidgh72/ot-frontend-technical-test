import compare from './compare';

function modifyData( data ) {
    
    let modifiedData = [];


    data.forEach(( item ) => {

        const modifiedItem = {};

        modifiedItem.symbol = item.target.gene_info.symbol;
        modifiedItem.gene_id = item.target.id;
        modifiedItem.gene_name = item.target.gene_info.name;
        modifiedItem.overall_association_score = item.association_score.overall;
        modifiedItem.association_scores = item.association_score.datatypes;

        modifiedData.push( modifiedItem )
    });

    let sortedData = modifiedData.sort( (a, b) => compare(a, b, "overall_association_score", "desc") );

    return sortedData;
}

export default modifyData;