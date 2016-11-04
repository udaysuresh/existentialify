walk(document.body);

function walk(node)  
{
    // this function borrowed
    
    var child, next;

    switch ( node.nodeType )  
    {
        case 1: 
        case 9:  
        case 11: 
            child = node.firstChild;
            while ( child ) 
            {
                next = child.nextSibling; 
                walk(child);
                child = next;
            }
            break;

        case 3: 
            handleText(node);
            break;
    }
}

function handleText(textNode) 
{
    var v = textNode.nodeValue;

    v = v.replace(/\bHappiness\b/g, "Lies");
    v = v.replace(/\bhappiness\b/g, "lies");
    v = v.replace(/\bHappy\b/g, "Deceived");
    v = v.replace(/\bhappy\b/g, "deceived");
    v = v.replace(/\bPermanent\b/g, "Ephemeral");
    v = v.replace(/\bpermanent\b/g, "ephemeral");
    //reminder to improve js skills
    
    textNode.nodeValue = v;
}
