'hi' === 'hi';  // true

// 다른 메모리를 참조하고있음 (false)
['hi'] === ['hi'];  // false
[1] == [1];  // false
[] == [];  // false


nums = [1, 2, 3];
numsCopy = nums;  // 같은 메모리 참조
nums.push('4')  // numsCopy도 변경(같은 걸 참조하고 있어서)
nums === numsCopy // true