import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function assetPath(path: string, theme?: string) {
    if (!path) return path
    if (path.startsWith('http') || path.startsWith('data:')) return path

    let processedPath = path
    if (theme) {
        processedPath = processedPath.replace(/\$\{theme\}/g, theme)
    }

    const basePath = '/Cashiro-Website'
    if (processedPath.startsWith(basePath)) return processedPath

    const cleanPath = processedPath.startsWith('/') ? processedPath : `/${processedPath}`
    return `${basePath}${cleanPath}`
}
