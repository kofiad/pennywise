export default function generateInitials(name) {
    if (typeof name !== 'string') {
        return "";
    }

    const words = name.split(/\s+/);
    const initials = words.map((word) => word.charAt(0)).join("");
    return initials.toUpperCase();
}
