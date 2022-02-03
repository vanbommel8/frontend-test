

export function editLabel(label=''){


    return label.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toUpperCase();
}


export function labelFilter(labelFilter=''){


    return  labelFilter.replace(/^./, labelFilter.toUpperCase())
}