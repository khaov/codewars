// Solution:

function trianglePerimeter(triangle){
    const xA=triangle.a.x;
    const yA=triangle.a.y;
    const xB=triangle.b.x;
    const yB=triangle.b.y;
    const xC=triangle.c.x;
    const yC=triangle.c.y;

    let AB=Math.sqrt(Math.pow((xA-xB) ,2) + Math.pow((yA-yB) ,2));
    let BC=Math.sqrt(Math.pow((xC-xB) ,2) + Math.pow((yC-yB) ,2));
    let CA=Math.sqrt(Math.pow((xC-xA) ,2) + Math.pow((yC-yA) ,2));

    return AB + BC + CA;
}

// Sample Tests:
