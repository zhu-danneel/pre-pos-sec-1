
function collect_same_elements(collection_a, collection_b) {
	var c =  new Array();
	var i = 0;
	var j = 0;
	for (i = 0;i < collection_a.length;i++)
	{
		for(j = 0; j < collection_b.length;j++)
		{
			if (collection_b[j] == collection_a[i])
			{
				c.push(collection_a[i]);
				continue;
			}
		}
	}
	console.log(c);
	return c;
}



module.exports = collect_same_elements;
