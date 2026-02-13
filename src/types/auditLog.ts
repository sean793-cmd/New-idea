// auditLog.ts

// Interface for individual audit log entry
export interface AuditLogEntry {
    id: string;
    timestamp: Date;
    userId: string;
    action: string;
    details?: string;
}

// Interface for audit log response
export interface AuditLogResponse {
    entries: AuditLogEntry[];
    total: number;
    page: number;
    pageSize: number;
}