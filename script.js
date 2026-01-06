function toggleSkills(type){
    const techGrid = document.getElementById('TechnicalSkills');
    const softGrid = document.getElementById('SoftSkills');

    const btnTech = document.getElementById('btn-tech');
    const btnSoft = document.getElementById('btn-soft');

    if(type === 'tech'){
        // Activate Technical Skills
        techGrid.classList.remove('hidden');
        softGrid.classList.add('hidden');

        //update button styles
        btnTech.classList.add('active');
        btnSoft.classList.remove('active');

    } else {
        // Activate Soft Skills
        softGrid.classList.remove('hidden');
        techGrid.classList.add('hidden');
       
        //update button styles
        btnSoft.classList.add('active');
        btnTech.classList.remove('active');
    }

}

