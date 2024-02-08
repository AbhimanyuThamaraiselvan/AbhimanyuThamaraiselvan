function find_rotation_count(N, A, B) {
    let low = 0;
    let high = N - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (A[mid] === B[0]) {
            return mid;
        }
        
        if (A[mid] > A[high]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

const N = parseInt(prompt());
const A = prompt().split(' ').map(Number);
const B = prompt().split(' ').map(Number);
const rotation_count = find_rotation_count(N, A, B);
console.log(rotation_count);

