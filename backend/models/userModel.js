import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'

    },
    isActive: {
        type: Boolean,
        default: true
    },
    lastLogin: Date,
    plan: {
        type: String,
        enum: ["free", "pro"],
        default: "free",
    },
    subscriptionStatus: {
        type: String,
        enum: ["active", "cancelled", "expired"],
        default: "active",
    },
    stripeCustomerId: String,
    subscriptionEndsAt: Date,
    aiCreditsUsed: { type: Number, default: 0 },
    aiCreditsLimit: { type: Number, default: 1000 },
     avatar: String,
    timezone: String,
    theme: {
      type: String,
      enum: ["light", "dark", "system"],
      default: "system",
    },
     authProvider: {
      type: String,
      enum: ["local", "google", "github"],
      default: "local",
    },
    deletedAt: Date,
}, { timestamps: true })

const userModel = mongoose.model('users', userSchema)
export default userModel