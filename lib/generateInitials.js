export default function generateInitials(name) {
    if (typeof name !== 'string') {
        return "";
    }

    const words = name.split(/\s+/);
    const initials = words.map((word) => word.charAt(0)).join("");
    return initials.toUpperCase();
}

// Example usage:
// const names = "John Doe";
// const initials = generateInitials(names);
// console.log(initials); // Output: "JD"
