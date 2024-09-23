// changes the color of donation btn and shows donation section
document.getElementById('show-donation').addEventListener('click', function(){
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-section').classList.remove('hidden');
    this.classList.add('bg-lime-400');
    this.classList.add('font-bold');
    this.classList.remove('btn-outline');
    document.getElementById('show-history').classList.remove('bg-lime-400');
    document.getElementById('show-history').classList.remove('font-bold');
    document.getElementById('show-history').classList.add('btn-outline');
});

// changes the color of history btn and shows history section
document.getElementById('show-history').addEventListener('click', function(){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
    this.classList.add('bg-lime-400');
    this.classList.add('font-bold');
    this.classList.remove('btn-outline');
    document.getElementById('show-donation').classList.remove('bg-lime-400');
    document.getElementById('show-donation').classList.remove('font-bold');
    document.getElementById('show-donation').classList.add('btn-outline');
});

// donation

document.getElementById('donation-button').addEventListener('click', function(){
    let total = parseFloat(document.getElementById('total-coin').innerText);
    let dnAmount = parseFloat(document.getElementById('donation-amount').value);
    let donation = parseFloat(document.getElementById('donation').innerText);
    

    if (dnAmount > 0 && dnAmount <= total) {
        total = total - dnAmount;
        donation = donation + dnAmount;

        document.getElementById('total-coin').innerText = total.toFixed(2);
        document.getElementById('donation').innerText = donation.toFixed(2);

        // donation history
        let placeName = document.getElementById('place-name');
        let historySection = document.getElementById('history-section');
        let newHistoryContainer = document.createElement('div');
        let newHistory = document.createElement('h1');
        

        newHistoryContainer.classList.add('border');
        newHistoryContainer.classList.add('rounded-lg');
        newHistoryContainer.classList.add('p-8');
        newHistory.classList.add('text-xl');
        newHistory.classList.add('font-bold');
        newHistory.innerText = `You donated ${dnAmount} ${placeName.innerText}`;
        historySection.appendChild(newHistoryContainer);
        newHistoryContainer.appendChild(newHistory);
        document.getElementById('donation-amount').value = '';
    } else {
        alert('Please enter a valid donation amount within your balance.');
    }
    
});


    
