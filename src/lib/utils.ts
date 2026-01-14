/*
 * Copyright (c) 2026 Justin Saju
 * 
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

