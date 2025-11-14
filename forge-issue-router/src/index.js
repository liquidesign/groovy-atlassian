'use strict';

export const routeIssue = (issue) => {
    switch (issue.reporter.department) {
        case 'Sales':
            return 'Sales Team';
        case 'Engineering':
            return 'Engineering Team';
        case 'Support':
            return 'Support Team';
        default:
            return 'General Team';
    }
};

// Example usage
const issue = { reporter: { department: 'Sales' } };
console.log(routeIssue(issue)); // Outputs: 'Sales Team'