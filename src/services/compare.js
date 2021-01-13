function compare(a, b, orderParameter, order) {

    const num = order === "desc" ? 1 : -1;
    if (a[orderParameter] < b[orderParameter]) return num * 1;
    if (a[orderParameter] > b[orderParameter]) return num * -1;
    return 0;

}

export default compare;